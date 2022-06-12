import mongoose from 'mongoose';

let Task = new mongoose.Schema({
    title: { 
        type: String, // criei objetos para dizer ao banco que é obrigatório, pois está salvando mesmo sendo
        required: [true, 'Atencao! Titulo é obrigatório']
    },
    owner: {
        type: String,
        required: [true, 'Atencao! Owner é obrigatório']
    },
    done: Boolean
});

export default mongoose.model('Task', Task);