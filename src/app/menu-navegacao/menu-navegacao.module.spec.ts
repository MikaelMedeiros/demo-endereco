import { MenuNavegacaoModule } from './menu-navegacao.module';

describe('MenuNavegacaoModule', () => {
  let menuNavegacaoModule: MenuNavegacaoModule;

  beforeEach(() => {
    menuNavegacaoModule = new MenuNavegacaoModule();
  });

  it('should create an instance', () => {
    expect(menuNavegacaoModule).toBeTruthy();
  });
});
