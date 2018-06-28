/*
 * File: VariantSubsystemModel3.h
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

#ifndef RTW_HEADER_VariantSubsystemModel3_h_
#define RTW_HEADER_VariantSubsystemModel3_h_
#ifndef VariantSubsystemModel3_COMMON_INCLUDES_
# define VariantSubsystemModel3_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "Rte_VariantSubsystemModel3.h"
#endif                                 /* VariantSubsystemModel3_COMMON_INCLUDES_ */

/* Macros for accessing real-time model data structure */

/* Block signals and states (auto storage) for system '<Root>' */
typedef struct tag_DW {
  real_T DiscreteTimeIntegrator_DSTATE;/* '<S2>/Discrete-Time Integrator' */
  real_T DiscreteTimeIntegrator1_DSTATE;/* '<S2>/Discrete-Time Integrator1' */
  int32_T clockTickCounter;            /* '<Root>/In' */
} DW;

/* Block signals and states (auto storage) */
extern DW rtDW;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Scope' : Unused code path elimination
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'VariantSubsystemModel3'
 * '<S1>'   : 'VariantSubsystemModel3/Variant Subsystem'
 * '<S2>'   : 'VariantSubsystemModel3/Variant Subsystem/Car'
 * '<S3>'   : 'VariantSubsystemModel3/Variant Subsystem/CarRefined'
 * '<S4>'   : 'VariantSubsystemModel3/Variant Subsystem/CarRefined/Band-Limited White Noise'
 */
#endif                                 /* RTW_HEADER_VariantSubsystemModel3_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
