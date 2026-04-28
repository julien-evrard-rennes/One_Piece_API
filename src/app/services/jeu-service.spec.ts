import { TestBed } from '@angular/core/testing';
import { JeuService } from './jeu-service';


describe('JeuService', () => {
  let service: JeuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
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

