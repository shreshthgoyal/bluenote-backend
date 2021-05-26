const client = require("../configs/db");

exports.create = (req,res) => {
    const { heading, content } = req.body;
  client
    .query(
      `INSERT INTO note (email, heading, content) VALUES ('${req.email}', '${heading}' , '${content}');`
    )
    .then((data) => {
      res.status(200).json({
        message: "Note added",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Data base error occured",
      });
    });
}

exports.getnotes = (req,res) => {
    client
    .query(`SELECT * FROM note WHERE email = '${req.email}'`)
    .then((data) => {
      const noteData = data.rows;
      const filteredData = noteData.map((note) => {
        return {
          noteId: note.id,
          heading: note.heading,
          content: note.content,
        };
      });
      res.status(200).json({
        message: "Notes for this user are :",
        data: filteredData,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Database error here",
      });
    });
}

exports.update = (req,res) => {
    const id = req.id;
    console.log(req.id);
    const { heading, content } = req.body;
    
    client
    .query(
      `UPDATE note SET heading='${heading}' , content='${content}' WHERE id='${id}'`
    )
    .then((data) => {
      res.status(200).json({
        message: "Updated note",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Database error occured while updating",
      });
    });
}

exports.delnote = (req,res) => {
    const id = req.id;
    console.log(req.id);
    
    client
    .query(
      `DELETE from note WHERE id='${id}'`
    )
    .then((data) => {
      res.status(200).json({
        message: "Note Deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Database error occured while updating",
      });
    });
}