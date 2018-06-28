/*
 * File: VariantSubsystemModel1.c
 *
 * Code generated for Simulink model 'VariantSubsystemModel1'.
 *
 * Model version                  : 1.54
 * Simulink Coder version         : 8.12 (R2017a) 16-Feb-2017
 * C/C++ source code generated on : Fri Jun 15 15:46:08 2018
 *
 * Target selection: autosar.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 * Validation result: Not run
 */

#include "VariantSubsystemModel1.h"

/* Block signals and states (auto storage) */
DW rtDW;

/* Model step function */
void Runnable_Step(void)
{
  int32_T rtb_Sensor2;

  /* DiscretePulseGenerator: '<Root>/Sensor2' */
  rtb_Sensor2 = ((rtDW.clockTickCounter < 5) && (rtDW.clockTickCounter >= 0));
  if (rtDW.clockTickCounter >= 9) {
    rtDW.clockTickCounter = 0;
  } else {
    rtDW.clockTickCounter++;
  }

  /* End of DiscretePulseGenerator: '<Root>/Sensor2' */

  /* Outport: '<Root>/Out1' incorporates:
   *  Product: '<S2>/Heater Switch'
   */
  Rte_IWrite_Runnable_Step_Out1_Out1((real_T)rtb_Sensor2 * 9.0486E+7);
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
