import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Casas extends Document {
  @Prop()
  nome: string;

  @Prop()
  cidade: string;
  
  @Prop()
  imagem: string;
  
  @Prop()
  idade: number;

}

export const CasasSchema = SchemaFactory.createForClass(Casas);
