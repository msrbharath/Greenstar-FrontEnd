import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IPerformanceDataTable, ISearchPerformanceData } from "./performance-data.interface";

const API_URL: string = 'http://localhost:2640';

@Injectable()
export class PerformanceService {

    private headerValue: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json' });

    constructor(private http: HttpClient) {
    }

    public getExistingPerformanceMetricDatas(searchPerformanceData: ISearchPerformanceData): Observable<any> {
        return this.http.post(API_URL+'/perfdata/existingmetricdatas', searchPerformanceData, { headers: this.headerValue });
    }

    public getCreatePerformanceMetricDatas(searchPerformanceData: ISearchPerformanceData): Observable<any> {
        return this.http.post(API_URL+'/perfdata/createmetricdatas', searchPerformanceData, { headers: this.headerValue });
    }

    public savePerformanceMetricDatas(performanceDataTable: IPerformanceDataTable): Observable<any> {
        return this.http.post(API_URL+'/perfdata/savemetricdatas', performanceDataTable, { headers: this.headerValue });
    }

    public updatePerformanceMetricDatas(performanceDataTable: IPerformanceDataTable): Observable<any> {
        return this.http.post(API_URL+'/perfdata/updatemetricdatas', performanceDataTable, { headers: this.headerValue });
    }

    public getPerformanceDataTemplate(searchPerformanceData: ISearchPerformanceData): Observable<any> {
        return this.http.post(API_URL + '/perfdata/downloadtemplate', searchPerformanceData, { responseType: 'blob' });
    }

    private handleError(error: Response | any): any {
        console.log('API Service :: Handle Error' + error);
        return Observable.throw(error);
    }

}
