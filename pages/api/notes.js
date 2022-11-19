// pages/api/note.js

import { createNote } from "../../lib/prisma/note";

export default async function handle(req, res) {

  // Run if the request was a post request
  if (req.method == "POST") {
    // Get note title & body from the request body
    const { title, body } = req.body;
    // Create a new note
   
    const note = await createNote(title, body);
    // return created note
    return res.json(note);
  }
}