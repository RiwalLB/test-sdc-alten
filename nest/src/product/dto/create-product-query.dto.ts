import { Transform } from 'class-transformer';
import {
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Max,
    MaxLength,
    Min,
} from 'class-validator';
import {
    CURRENCY_TO_CENTS,
    INTEGER_MAX_VALUE,
} from 'src/shared/helpers/number.helper';
import { STRING_MAX_SIZE } from 'src/shared/helpers/string.helper';

export class CreateProductQueryDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(STRING_MAX_SIZE)
    code!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(STRING_MAX_SIZE)
    name!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(STRING_MAX_SIZE)
    description!: string;

    @IsInt()
    @Min(0)
    @Max(INTEGER_MAX_VALUE)
    @Transform(({ value }) => Number(value) * CURRENCY_TO_CENTS)
    price!: number;

    @IsInt()
    @Min(0)
    @Max(INTEGER_MAX_VALUE)
    quantity!: number;

    @IsInt()
    @Min(0)
    @Max(INTEGER_MAX_VALUE)
    inventoryStatusId!: number;

    @IsInt()
    @Min(0)
    @Max(INTEGER_MAX_VALUE)
    categoryId!: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(STRING_MAX_SIZE)
    image?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(INTEGER_MAX_VALUE)
    rating?: number;
}
