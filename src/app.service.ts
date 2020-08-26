import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    // const kittySchema = new mongoose.Schema({
    //   name: String
    // });
    // const Kittens = mongoose.model('Kitten', kittySchema);
    // const silence = new Kittens({ name: 'Silence' });
    // // console.log(silence.name); // 'Silence'

    // kittySchema.methods.speak = function () {
    //   const greeting = this.name
    //     ? "Meow name is " + this.name
    //     : "I don't have a name";
    //   console.log(greeting);
    // }

    // const fluffy = new Kittens({ name: 'fluffy' });
    // // fluffy.speak(); // "Meow name is fluffy"

    // fluffy.save(function (err, fluffy) {
    //   if (err) return console.error(err);
    //   // fluffy.speak();
    // });

    // Kittens.find(function (err, kittens) {
    //   if (err) return console.error(err);
    //   console.log(kittens);
    // })

    // Kittens.find({ name: /^fluff/ });

    // const Kitten = mongoose.model('Kitten', kittySchema);
    return ' I love programming';
  }
}
