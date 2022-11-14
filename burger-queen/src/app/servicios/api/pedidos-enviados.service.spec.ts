import { TestBed } from '@angular/core/testing';

import { PedidosEnviadosService } from './pedidos-enviados.service';

describe('PedidosEnviadosService', () => {
  let service: PedidosEnviadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosEnviadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
