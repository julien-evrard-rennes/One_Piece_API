import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.clear(); 
  });

  it('retourne false si email et mdp incorrect', async () => {
    const result = await service.login('mauvais@email.com', 'mdpfaux');
    expect(result).toBe(false);
  });

});
