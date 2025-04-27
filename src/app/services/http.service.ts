import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private _httpClient: HttpClient) { }

    getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });
    }

    /******************TOKEN********************/

    get<T>(url: string) {
        return this._httpClient.get<T>(url, { headers: this.getHeaders() });
    }

    post<T>(url: string, body: any) {
        return this._httpClient.post<T>(url, body, { headers: this.getHeaders() });
    }

    patch<T>(url: string, body: any) {
        return this._httpClient.patch<T>(url, body, { headers: this.getHeaders() });
    }

    delete<T>(url: string) {
        return this._httpClient.delete<T>(url, { headers: this.getHeaders() });
    }

    /**********************************************/

    /******************NO TOKEN********************/

    get_noauth<T>(url: string) {
        return this._httpClient.get<T>(url);
    }

    post_noauth<T>(url: string, body: any) {
        return this._httpClient.post<T>(url, body);
    }

    patch_noauth<T>(url: string, body: any) {
        return this._httpClient.patch<T>(url, body);
    }

    delete_noauth<T>(url: string) {
        return this._httpClient.delete<T>(url);
    }

    /**********************************************/
}
