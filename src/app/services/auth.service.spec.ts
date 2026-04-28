// auth.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.clear(); // nettoyer entre chaque test
  });

  it('retourne false si email et mdp incorrect', () => {
    expect(service.login('mauvais@email.com', 'mdpfaux')).toBe(false);
  });

    });
