// add fake data to the firebase database
import { app }  from './firebase_config.js'
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; 

const db = getFirestore(app);

// auto generate 10 reports
for (let i = 0; i < 10; i++) {
    const postsRef = collection(db, "posts");
    await setDoc(doc(postsRef, i.toString()), {
        'id': i,
        'likes': 5,
        'comments': ["comment1", "comment2", "comment3"],
        'title': "title" + i,
        'creatorName': "creatorName" + i,
        'creatorImage': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        'url': 'https://media.npr.org/assets/img/2022/08/21/moon1_sq-3e2ed2ced72ec3254ca022691e4d7ed0ac9f3a14-s1100-c50.jpg',
        
    });
}
