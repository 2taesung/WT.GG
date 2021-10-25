from openpyxl import Workbook
#
write_wb = Workbook()

# #Sheet1에다 입력
write_ws = write_wb.active
# write_ws = write_wb.active
# write_ws['A1'] = '숫자'
# write_ws['A2'] = '숫자2'
# write_ws['A3'] = '숫자'
# write_ws['A4'] = '숫자2'
# write_ws['A5'] = '숫자'
# write_ws['A6'] = '숫자2'

# #행 단위로 추가
# write_ws.append([1,2,3])
# write_ws.cell(5,5,'5행5열')
# write_wb.save('C:/Users/hsa82/Desktop/프로젝트/웹툰/크롤링/되나.xlsx')
for i in range(0,3):

    temp = 'A'+str(i)
    # print(temp)

    write_ws[temp] = 'ㅎㅇ'
write_wb.save('C:/Users/hsa82/Desktop/프로젝트/웹툰/크롤링/되나.xlsx')