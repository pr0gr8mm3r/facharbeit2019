export class Stern {
  constructor(Name: string, rektaszension,deklination,HR,bfID,Vmang,Sp,pmRA,pmDE ) {
    this.Name = Name
    this.RAh = rektaszension
    this.DEd = deklination  
    this.HR = HR
    this.bfID = bfID
    this.Vmang = Vmang
    this.Sp = Sp
    this.pmRA = pmRA
    this.pmDE = pmDE

  }
  Name: string
  RAh: number
  DEd: number
  HR: string
  bfID: string
  Vmang : number
  Sp: string
  pmRA: number
  pmDE: number    

  
}