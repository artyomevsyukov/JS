import { format } from "date-fns";

/**
 *
 * @param {String} str Дата в виде строки
 * @param {String} type Формат даты (например, 'yyyy-mm-dd' или 'dd-mm-yyyy')
 * @returns {String} Преобразованная дата
 */
export function formatDate(str, type) {
    const date = new Date(str);
    return format(date, type);
}
