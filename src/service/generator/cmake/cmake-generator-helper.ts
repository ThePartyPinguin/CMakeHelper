import { Visibility } from "../../../model/project/visibility";
import { CMakeVariable } from "./cmake-variable";

export class CMakeGeneratorHelper
{
	public static formatVarSafeString(_value: string): string
	{
		const regex = /[-.]/;
		return _value.split(regex).join('_').toUpperCase();
	}

	public static formatVarString(_varName: string, _variable: CMakeVariable): string
	{
		const varSafeName = CMakeGeneratorHelper.formatVarSafeString(_varName);
		return `${varSafeName}_${_variable}`
	}

	public static formatVisibilityVarString(_varName: string, _visibility: Visibility, _variable: CMakeVariable): string
	{
		const visibilityString = this.visibilityToCMakeVisibility(_visibility);
		const varSafeName = this.formatVarSafeString(_varName).toUpperCase();
		return `${varSafeName}_${visibilityString}_${_variable}`
	}

	public static visibilityToCMakeVisibility(_visibility: Visibility): string
	{
		const visibility = <Visibility>(<string><unknown>_visibility).toLowerCase()
		switch(visibility)
		{
			case Visibility.Public:
				return 'Public';
			case Visibility.Private:
				return 'Private';
			case Visibility.Interface:
				return 'Interface';	
		}
	}
}