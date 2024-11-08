import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Casas } from './casas.model';

@Injectable()
export class CasasService {
  constructor(@InjectModel(Casas.name) private casasModel: Model<Casas>) {}

  async create(casas: Casas): Promise<Casas> {
    console.log('payload service...', casas)
    const createdCasas = new this.casasModel(casas);
    console.log('createdCasas service...', createdCasas)
    return createdCasas.save();
  }

  async findAll(): Promise<Casas[]> {
    return this.casasModel.find().exec();
  }

  async findOne(id: string): Promise<Casas> {
    return this.casasModel.findById(id).exec();
  }

  async findImage(id: string): Promise<Casas> {
    return this.casasModel.findById(id).exec();
  }

  async update(id: string, casas: Casas): Promise<Casas> {
    return this.casasModel.findByIdAndUpdate(id, casas, { new: true }).exec();
  }

  async remove(id: string): Promise<Casas> {
    return this.casasModel.findByIdAndDelete(id).exec();
  }
}
