import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore) {}

  // 🔹 REGISTRO
  async register(nombre: string, email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    const user = userCredential.user;

    // Guardar datos adicionales en Firestore
    await setDoc(doc(this.firestore, 'users', user.uid), {
      nombre: nombre,
      email: email,
      createdAt: new Date()
    });

    return user;
  }

  // 🔹 LOGIN
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // 🔹 LOGOUT
  logout() {
    return this.auth.signOut();
  }
}
