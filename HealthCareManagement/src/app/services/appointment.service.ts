import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iappointment } from '../models/appointment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient,private loginser:LoginService) { }
  private username:string=this.loginser.userName;

  private Mainurl:string="localhost:9052/";

   private allApptUrl:string=this.Mainurl+"viewAll";
   private getByIdUrl:string=this.Mainurl+"view/";
  
   private deleteByIdUrl:string=this.Mainurl+"remove/";//id
   private getByDoctorUserNameUrl=this.Mainurl+"getByDoctorUserName/";//id
   private getByPatientUserNameUrl=this.Mainurl+"getByPatientUserName/";//id
   private getByPathologyUserNameUrl=this.Mainurl+"getByPathologyUserName/";//id
   private updateAppointmentUrl=this.Mainurl+"update";//admin/id





   public addDoctorToDatabase(appointment: Iappointment): Observable<Iappointment> {
    return this.http.post<Iappointment>(this.Mainurl+"/"+this.username+"/add", appointment);
  }

  public getAllAppointmentsFromDatabase(): Observable<Iappointment[]> {
    return this.http.get<Iappointment[]>(this.allApptUrl);

  }
  public getAppointmentFromDatabaseById(id: number): Observable<Iappointment> {

    return this.http.get<Iappointment>(this.getByIdUrl + id);
  }
  // public getAppointmentFromDatabaseByNmae(name: string): Observable<Iappointment> {

  //   return this.http.get<Iappointment>(this.getByNameUrl + name);
  // }
  public deleteAppointmentFromDatabase(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.deleteByIdUrl + id);
  }

  public getAppoitntmentsByDoctorUserName(username:string):Observable<Iappointment>{
    return this.http.get<Iappointment>(this.getByDoctorUserNameUrl+username)
  }
  public getAppoitntmentsByPatientUserName(username:string):Observable<Iappointment>{
    return this.http.get<Iappointment>(this.getByPatientUserNameUrl+username)
  }
  public getAppoitntmentsByPathologyUserName(username:string):Observable<Iappointment>{
    return this.http.get<Iappointment>(this.getByPathologyUserNameUrl+username)
  }
public updateAppointment(id:number,appointment:Iappointment):Observable<Iappointment>{
  return this.http.put<Iappointment>(this.updateAppointmentUrl+ this.username + "/" + id, appointment);
}
}
