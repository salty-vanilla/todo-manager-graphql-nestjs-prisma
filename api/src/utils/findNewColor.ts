import { prisma } from "@lib/prisma";
import { PRESET_COLORS } from "src/types/colors";

export const findNewColor = async (teamId: number) : Promise<string> => {
  const existingColors: string[] = ( await prisma.teamMember.findMany({
    where: {
      teamId: {
        equals: teamId
      }
    },
    select: { color: true }
  })).map((obj) => obj.color);

  if (existingColors.length === 0)
    return PRESET_COLORS[0];

  const newColor = PRESET_COLORS.find((color) => !existingColors.includes(color));

  if (newColor === undefined)
    throw new Error

  return newColor;
}