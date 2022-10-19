/**
 *     @description INTERFACE RESPONSÁVEL PELOS TODOS
 *      Esta informação aparecerá quando o mouse 
 *      for repousado em cima do nome desta interface 
 */

export interface ITodos {
    title: string;
    description: string;
    id: string;
    date: string;    
    concluded: boolean;
}