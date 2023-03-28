const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    display_picture: String,
    password: {
        type: String,
        required: true
    }
},
    {
        toJSON: { virtuals: true }
    }
);

UserSchema.methods.generateJWTToken = function() {
    const user = {
        email: this.email,
        id: this._id
    }
}

UserSchema.virtual('fullname').get(function() {
    return `${this.first_name} ${this.last_name}`
})

module.exports = mongoose.model('User', UserSchema);