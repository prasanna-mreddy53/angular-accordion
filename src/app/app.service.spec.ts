import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AppService]
  }));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
  it('should retrieve faqs from the API via GET', () => {
    const service: AppService = TestBed.get(AppService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    service.ReadJsonData().subscribe((faqsResponse: any) => {
      expect(faqsResponse.length).toBeGreaterThan(0);
    });
    const mockReq = httpMock.expectOne("./assets/faqs.json");
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    httpMock.verify();
  })


});
