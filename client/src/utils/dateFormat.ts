/**
   * This function formats date
   * @param date This is the date parameter
   * @returns returns formatted date in: yyyy-mm-dd
   */
export default (date: Date | string) => {
    const d = new Date(date);
    const datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    return datestring;
};