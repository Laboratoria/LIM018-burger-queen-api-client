import { TestBed } from '@angular/core/testing';

import { ListaDePedidosService } from './lista-de-pedidos.service';

describe('ListaDePedidosService', () => {
  let service: ListaDePedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDePedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
