import { PlanTuristicoModule } from './plan-turistico.module';

describe('PlanTuristicoModule', () => {
  let planTuristicoModule: PlanTuristicoModule;

  beforeEach(() => {
    planTuristicoModule = new PlanTuristicoModule();
  });

  it('should create an instance', () => {
    expect(planTuristicoModule).toBeTruthy();
  });
});
