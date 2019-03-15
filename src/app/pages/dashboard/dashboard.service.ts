import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";


const API_URL: string = 'http://localhost:2640';

@Injectable()
export class DashboardService {
  
    private headerValue: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json' });

    constructor(private http: HttpClient) {
    }

    public getTotalNoOfSchools(): Observable<any> {
        return this.http.post(API_URL + '/perfmetrics/dashboard/totalschools',  { headers: this.headerValue });
    }

    public getSchoolByMonthMetrics(): Observable<any> {
        return this.http.post(API_URL + '/perfmetrics/dashboard/schoolbymonth',  { headers: this.headerValue });
    }

    public getTopPerformingSchools(): Observable<any> {
        return this.http.post(API_URL + '/perfmetrics/dashboard/topschools',  { headers: this.headerValue });
    }
   
    private handleError(error: Response | any): any {
        console.log('API Service :: Handle Error' + error);
        return Observable.throw(error);
    }

}
