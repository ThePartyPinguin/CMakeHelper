import { BaseFlowConfig } from "../../flow/base-flow-config";
import { RegexConstants } from "../../util/regex-constants";
import { RegexValidatedTextInputStep } from "../input/regex-validated-text-input-step";
import { TextInputStepConfig } from "../input/text-input-step";
import { StepNames } from "../step-names";

export interface ProjectNameConfig extends BaseFlowConfig
{
	projectName: string;
}

export class InputProjectNameStep<TFlowConfig extends ProjectNameConfig> extends RegexValidatedTextInputStep<TFlowConfig>
{
	constructor(
		_config: TFlowConfig)
	{
		super(_config, StepNames.inputProjectName, {
			regexString: RegexConstants.projectNameRegex,
			regexFlags: 'i',
			validationMessage: `Please input a project name conform the regex /${RegexConstants.projectNameRegex}/'`,
			allowEmpty: false
		});
	}

	protected onInput(inputValue: string): void {
		this.config.projectName = inputValue;
	}

	public getStepConfig(): TextInputStepConfig {
		return {
			stepTitle: this.config.flowName,
			placeHolder: 'Enter project name',
			prompt: 'Please enter a valid project name consisting of only a-z, A-Z, 0-9, -, _',
			ignoreFocusOut: true
		};
	}
}