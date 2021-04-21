import { CidadeModule } from './cidade.module';

describe('CidadeModule', () => {
  let cidadeModule: CidadeModule;

  beforeEach(() => {
    cidadeModule = new CidadeModule();
  });

  it('should create an instance', () => {
    expect(cidadeModule).toBeTruthy();
  });
});
