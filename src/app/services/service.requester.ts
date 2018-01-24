import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceRequester {
    url = environment.url;

    constructor(protected http: HttpClient) {
    }

    public httpGet(action: string) {
        return this.http.get(this.url + action)
            .toPromise()
            .then(response => {
               return response;
            })
            .catch((response: any) => {
                return this.handleError(response);
            });
    }

    public httpPost(action: string, data: {} = {}) {
        return this.http.post(this.url + action, data, {
            observe: 'response',
            responseType: 'text',
            withCredentials: true
        })
            .toPromise()
            .then(response => {
                return JSON.parse(response.body);
            })
            .catch((response: any) => {
                // if (response.erre) {
                //
                // }
              console.log('response', response)
                return this.handleError(response);
            });
    }

    protected handleError(response: any) {
        let message = response;
        let errorCode;

        if (response.error) {
            try {
                const jsonBody = JSON.parse(response.error);

                if (jsonBody.message) {
                    message = jsonBody.message;
                }

                if (jsonBody.status) {
                    errorCode = jsonBody.status;
                }

            } catch (err) {
                message = 'Service unavailable.';
            }
        }

        return Promise.reject({
          message: message,
          status: errorCode
        });
    }
}