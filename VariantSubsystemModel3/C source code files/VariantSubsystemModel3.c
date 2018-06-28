/*
 * File: VariantSubsystemModel3.c
 *
 * Code generated for Simulink model 'VariantSubsystemModel3'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.12 (R2017a) 16-Feb-2017
 * C/C++ source code generated on : Fri Jun 15 16:33:13 2018
 *
 * Target selection: autosar.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 * Validation result: Not run
 */

#include "VariantSubsystemModel3.h"

/* Block signals and states (auto storage) */
DW rtDW;

/* Model step function */
void Runnable_Step(void)
{
  int32_T rtb_In;

  /* Outport: '<Root>/Out1' incorporates:
   *  DiscreteIntegrator: '<S2>/Discrete-Time Integrator'
   */
  Rte_IWrite_Runnable_Step_Out1_Out1(rtDW.DiscreteTimeIntegrator_DSTATE);

  /* DiscretePulseGenerator: '<Root>/In' */
  rtb_In = ((rtDW.clockTickCounter < 5) && (rtDW.clockTickCounter >= 0));
  if (rtDW.clockTickCounter >= 9) {
    rtDW.clockTickCounter = 0;
  } else {
    rtDW.clockTickCounter++;
  }

  /* End of DiscretePulseGenerator: '<Root>/In' */

  /* Update for DiscreteIntegrator: '<S2>/Discrete-Time Integrator' incorporates:
   *  DiscreteIntegrator: '<S2>/Discrete-Time Integrator1'
   */
  rtDW.DiscreteTimeIntegrator_DSTATE += rtDW.DiscreteTimeIntegrator1_DSTATE;

  /* Update for DiscreteIntegrator: '<S2>/Discrete-Time Integrator1' incorporates:
   *  Gain: '<S2>/Gain'
   */
  rtDW.DiscreteTimeIntegrator1_DSTATE += 2.0 * (real_T)rtb_In;
}

/* Model initialize function */
void Runnable_Init(void)
{
  /* (no initialization code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
