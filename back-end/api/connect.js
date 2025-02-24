//Javascript Assincrono
//await async
//fullfilled
import {MongoClient} from "mongodb";

const URI =
  "mongodb+srv://gabrielprimieri:6jKLnoOEFy6g484e@cluster0.hcqqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);
