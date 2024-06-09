const cadena = "mongodb+srv://zapatajimenez:OXkBrNLenmKmVZ8G@cluster0.h2e30nt.mongodb.net/";
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(cadena);