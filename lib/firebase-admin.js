import admin from 'firebase-admin';

if (!admin.apps.length) {

  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY
    })
  });
}

export default admin.firestore();
