import { TestBed } from '@angular/core/testing';
import { JeuService } from './jeu-service';


describe('JeuService', () => {
  let service: JeuService;

  beforeEach(() => {
<<<<<<< HEAD
    TestBed.configureTestingModule({
    });
=======
    TestBed.configureTestingModule({});
>>>>>>> 002c1c599ad6cd5c9e94c3b0996db4a71100500a
    service = TestBed.inject(JeuService);
  });

   describe('getScore', () => {
    it('retourne 10 pour un résultat Complet', () => {
      expect(service.getScore('Complet')).toBe(10);
    });

    it('retourne 5 pour un résultat Nom', () => {
      expect(service.getScore('Nom')).toBe(5);
    });

    it('retourne 5 pour un résultat Prenom', () => {
      expect(service.getScore('Prenom')).toBe(5);
    });

    it('retourne 0 pour un résultat Perdu', () => {
      expect(service.getScore('Perdu')).toBe(0);
    });
  });
});

