import { Observable } from "rxjs";
import { IChatMessageModel } from "../models/message.model";
import { ChatCompletion } from "openai/resources";

export abstract class ChatRepository {
  abstract sendMessage(params: IChatMessageModel): Observable<ChatCompletion>;
}