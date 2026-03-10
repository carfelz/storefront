"use client"

import { Stepper, Step, StepLabel, StepConnector, stepConnectorClasses } from "@mui/material"
import { styled } from "@mui/material/styles"

const PandaStepIconRoot = styled('div')<{ ownerState: { active?: boolean; completed?: boolean } }>(
    ({ theme, ownerState }) => ({
        backgroundColor: ownerState.active ? '#D35400' : ownerState.completed ? '#D35400' : 'rgba(255, 255, 255, 0.4)',
        zIndex: 1,
        color: '#fff',
        width: 44,
        height: 44,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: ownerState.active ? '0 4px 10px 0 rgba(0,0,0,0.15)' : 'none',
        border: '2px solid rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.4s ease',
    }),
);

function PandaStepIcon(props: { active?: boolean; completed?: boolean; className?: string }) {
    const { active, completed, className } = props;

    return (
        <PandaStepIconRoot ownerState={{ active, completed }} className={className}>
            {completed ? (
                <span className="text-xl" title="Completed">🐾</span>
            ) : active ? (
                <span className="text-xl animate-pulse" title="Active">🐼</span>
            ) : (
                <span className="w-3 h-3 rounded-full bg-deep-slate opacity-40"></span>
            )}
        </PandaStepIconRoot>
    );
}

const CustomConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
        left: 'calc(-50% + 22px)',
        right: 'calc(50% + 22px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#D35400',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#D35400',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: 'rgba(44, 62, 80, 0.2)',
        borderTopWidth: 3,
        borderRadius: 1,
        transition: 'border-color 0.4s ease',
    },
}));

const steps = ['Address', 'Delivery', 'Payment', 'Review'];

export default function CheckoutStepper({ activeStep }: { activeStep: number }) {
    return (
        <div className="w-full glass-panel p-6 mb-8 mt-2">
            <Stepper alternativeLabel activeStep={activeStep} connector={<CustomConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={PandaStepIcon}>
                            <span className="font-semibold text-deep-slate">{label}</span>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}
