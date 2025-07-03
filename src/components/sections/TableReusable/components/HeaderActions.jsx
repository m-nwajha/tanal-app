'use client';

import { Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import MyPDFDocument from '@/utils/pdf/MyPDFDocument';

// استخراج البيانات من الجدول
const extractTableData = (data, columns) => {
  return data.map(row => columns.map(col => row[col.id] || '-'));
};

// تصدير إلى Excel
const exportToExcel = (data, columns, fileName = 'table.xlsx') => {
  const rows = extractTableData(data, columns);
  const headers = columns.map(col => col.label);

  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'بيانات');

  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  });

  const blob = new Blob([excelBuffer], {
    type: 'application/octet-stream',
  });

  saveAs(blob, fileName);
};

// ✅ تصدير إلى PDF باستخدام react-pdf
const exportToPDF = async (data, columns, fileName = 'table.pdf') => {
  const headers = columns.map(col => col.label);
  const rows = extractTableData(data, columns);
  const blob = await pdf(
    <MyPDFDocument
      headers={headers}
      rows={rows}
    />
  ).toBlob();
  saveAs(blob, fileName);
};

const HeaderActions = ({ data, tableHeader, title, createBtn }) => (
  <Grid
    container
    sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
    {createBtn && (
      <Grid
        item
        sx={{ alignSelf: 'center' }}>
        <Button
          component={Link}
          sx={{ borderRadius: '12px' }}
          href={createBtn?.link}
          variant='contained'>
          {createBtn?.label}
        </Button>
      </Grid>
    )}
    <Grid
      item
      sx={{ alignSelf: 'center' }}>
      <Typography
        color='primary'
        variant='h6'
        sx={{ p: 2 }}>
        {title}
      </Typography>
    </Grid>

    <Grid
      item
      sx={{ alignSelf: 'center', display: 'flex', gap: 1 }}>
      <Button
        variant='outlined'
        onClick={() => exportToExcel(data, tableHeader)}>
        تصدير إلى Excel
      </Button>
      <Button
        variant='outlined'
        onClick={() => exportToPDF(data, tableHeader)}>
        تصدير إلى PDF
      </Button>
    </Grid>
  </Grid>
);

export default HeaderActions;
