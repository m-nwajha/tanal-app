import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'Cairo',
  fonts: [
    {
      src: '/fonts/Cairo-Regular.ttf',
      fontWeight: 'normal',
    },
    {
      src: '/fonts/Cairo-Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Cairo',
    flexDirection: 'column',
    padding: 20,
    direction: 'rtl',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomStyle: 'solid',
    paddingVertical: 4,
  },
  cell: {
    flexGrow: 1,
    fontSize: 9,
    paddingHorizontal: 4,
    textAlign: 'right',
  },
  tableHeader: {
    backgroundColor: '#eee',
    fontWeight: 'bold',
  },
});

const MyPDFDocument = ({ headers, rows }) => (
  <Document>
    <Page
      size='A3'
      orientation='landscape'
      style={styles.page}>
      <Text style={styles.header}>تقرير البيانات</Text>

      {/* رأس الجدول */}
      <View style={[styles.row, styles.tableHeader]}>
        {headers.map((header, index) => (
          <Text
            style={styles.cell}
            key={index}>
            {header}
          </Text>
        ))}
      </View>

      {/* بيانات الصفوف */}
      {rows.map((row, rowIndex) => (
        <View
          style={styles.row}
          key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Text
              style={styles.cell}
              key={cellIndex}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default MyPDFDocument;
