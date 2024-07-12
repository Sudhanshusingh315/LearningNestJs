import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: false })
  displayname?: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
  settings: mongoose.Schema.Types.ObjectId;
}

// SchemaFactory turns the calss into Schema, otherwise nestjs wouldn't know
export const UserSchema = SchemaFactory.createForClass(User);
