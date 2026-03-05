// project.service.ts
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  getProjects(): Observable<any[]> {
    return authState(this.auth).pipe(
      switchMap(u => {
        if (!u) return of([]);
        const projectsRef = collection(this.firestore, 'projects');
        const q = query(projectsRef, where('userId', '==', u.uid));
        return collectionData(q, { idField: 'id' }) as Observable<any[]>;
      })
    );
  }

  async addProject(project: any) {
    const currentUser = await this.auth.currentUser;
    const rawImage = (project.image ?? '').trim();
    const image =
  rawImage.startsWith('http://') || rawImage.startsWith('https://')
    ? rawImage
    : 'https://via.placeholder.com/400';

    if (!currentUser) {
      throw new Error('Usuario no autenticado (currentUser es null)');
    }

    const projectsRef = collection(this.firestore, 'projects');

    const technologies = Array.isArray(project.technologies)
      ? project.technologies.map((t: string) => (t ?? '').trim()).filter(Boolean)
      : (typeof project.technologies === 'string'
          ? project.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
          : []);

    return await addDoc(projectsRef, {
      title: (project.title ?? '').trim(),
      description: (project.description ?? '').trim(),
      image,
      githubLink: (project.githubLink ?? '').trim(),
      technologies,
      userId: currentUser.uid,
      createdAt: serverTimestamp()
    });
  }

  async updateProject(id: string, project: any) {
    const docRef = doc(this.firestore, `projects/${id}`);

    const technologies = Array.isArray(project.technologies)
      ? project.technologies.map((t: string) => (t ?? '').trim()).filter(Boolean)
      : (typeof project.technologies === 'string'
          ? project.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
          : []);

    return await updateDoc(docRef, {
      title: (project.title ?? '').trim(),
      description: (project.description ?? '').trim(),
      image: (project.image ?? '').trim(),
      technologies,
      githubLink: (project.githubLink ?? project.github ?? '').trim()
    });
  }

  async deleteProject(id: string) {
    const docRef = doc(this.firestore, `projects/${id}`);
    return await deleteDoc(docRef);
  }


}
