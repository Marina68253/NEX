import { Injectable } from '@nestjs/common';

export interface iTrack {
  id: number,
  title: string,
  duracion: number,
  artist: string,
 }

export const tracks: iTrack[] = [ 
{
  id: 1,
  title: "cancion 2",
  duracion: 120,
  artist: "interprete 1",
 },
 {
  id: 2,
  title: "cancion 2",
  duracion: 100,
  artist: "interprete 2",
 },
 {
  id: 3,
  title: "cancion 3",
  duracion: 110,
  artist: "interprete 3",
 }
]

@Injectable()
export class AppService {
  getTracks():iTrack[] {
    return tracks;
  }
}
