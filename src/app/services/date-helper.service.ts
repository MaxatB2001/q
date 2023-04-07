import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateHelperService {

  constructor() { }

  static monthDiff(dateFrom: Date, dateTo: Date): number {
    dateFrom = new Date(dateFrom);
    dateTo = new Date(dateTo);
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
  }

  static dateDifference(endDate: Date, startDate: Date, inlusiveOfEndDate: boolean = false): number {
    endDate = new Date(endDate);
    startDate = new Date(startDate);

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const utc1 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const utc2 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

    return Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY)) + (inlusiveOfEndDate ? 2 : 1);
  }

  static getMonthName(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {month: "short"}).format(date);
  }

  static daysInMonth(date: Date): number {
    date = new Date(date);
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  static addMonths(date: Date, monthsToAdd: number): Date {
    date = new Date(date);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return new Date(firstDayOfMonth.setMonth(monthsToAdd + firstDayOfMonth.getMonth()));
  } 

  getMonths(startDate: Date, endDate: Date) {
    const startMonth = startDate.getMonth();
    const endMonth= endDate.getMonth();
    const totalDurationDays = DateHelperService.dateDifference(startDate, endDate, true);
    let months = new Array();
    for(var i = 0; i<= endMonth - startMonth; i++) {
      const adjustedStartDate = DateHelperService.addMonths(startDate, i);
      const monthName = DateHelperService.getMonthName(adjustedStartDate);
      const daysInMonth = DateHelperService.daysInMonth(adjustedStartDate);
      const monthDurationPercentage = daysInMonth/totalDurationDays * 100;
      months.push({monthName: monthName, monthDurationPercentage: monthDurationPercentage, daysInMonth});
    }
    return months;
  }
}
