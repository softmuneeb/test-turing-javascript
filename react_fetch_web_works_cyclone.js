import React, { useEffect, useState } from 'react';
import axios from 'axios';
function CycloneData() {
  const [dataList, setDataList] = useState();
  const url =
    'https://en.wikipedia.org/wiki/2021_North_Indian_Ocean_cyclone_season';

  const fetchfromWeb = async () => {
    /**
     * Complete the following function to fetch data of table from above given url.
     * Fetch Name of cyclone and Death from table with class "wikitable"
     * After fetching set data in dataList state as Array such as {name:'cyclone_name', death:'death count'}
     */

    try {
      // const response = await fetch(url);
      // const html = await response.text();
      const response = await axios.get(url);
      const html = response.data;
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Replace 'wikitable' with the actual class name of the table you want to fetch
      const table = doc.querySelector('.wikitable');
      const rows = table.querySelectorAll('tr');

      let data = [];
      rows.forEach((row) => {
        const rowData = [];
        const columns = row.querySelectorAll('td');
        columns.forEach((column) => {
          rowData.push(column.textContent.trim());
        });
        data.push(rowData);
      });

      // Remove the header row if needed
      data.shift();
      data.shift();
      data.splice(-2);
      // data = data.map(arr => [arr[0], arr[arr.length-2]])
      data = data.map((arr) => ({ name: arr[0], death: arr[arr.length - 2] }));
      console.log('html', data);
      setDataList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchfromWeb();
  }, []);

  const handleDownload = () => {
    /**
     * Complete this function to enable JSON file download of cyclone data with filename cyclone_data.json
     * File should contain data in following format
     * {
     *    status:'success',
     *    data: dataList
     * }
     *
     * Note: Don't use any NPM package to complete the task.
     *
     */

    // Create a text file content
    const fileContent = JSON.stringify(
      {
        status: 'success',
        dataList,
      },
      0,
      2,
    );

    // Create a Blob containing the text file content
    const blob = new Blob([fileContent], { type: 'application/json' });

    // Create a hidden link element
    const link = document.createElement('a');

    // Set the href attribute with the Blob data
    link.href = window.URL.createObjectURL(blob);

    // Set the download attribute with the desired file name
    link.download = 'cyclone_data.json';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document (optional)
    document.body.removeChild(link);
  };

  function generateCSV() {
    /**
     * Complete this function to enable CSV file download of cyclone data with filename cyclone_data.csv
     * Note: Don't use any NPM package to complete the task.
     */

    // Create a text file content
    let fileContent = `name, death`;

    dataList.forEach((c) => (fileContent += `\n${c.name}, ${c.death}`));

    // Create a Blob containing the text file content
    const blob = new Blob([fileContent], { type: 'application/json' });

    // Create a hidden link element
    const link = document.createElement('a');

    // Set the href attribute with the Blob data
    link.href = window.URL.createObjectURL(blob);

    // Set the download attribute with the desired file name
    link.download = 'cyclone_data.csv';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document (optional)
    document.body.removeChild(link);
  }
  return (
    <div>
      <div className='arena'>
        <div className='arena__head' id='title'>
          2021 Cyclone List
        </div>

        {dataList ? (
          <div className='arena__body'>
            {dataList.map((entry, i) => (
              <div key={i} className='arena__body--individual'>
                <div id={i} className='arena__body--individual--top'>
                  {entry.name}
                </div>
                <div className='arena__body--individual--bottom'>
                  <div>Deaths</div>
                  <div>{entry.death}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='no-data'> No Data Found</div>
        )}

        {dataList && (
          <div className='arena--footer'>
            <button
              id='download-btn'
              data-testid='download-btn'
              className='download-btn'
              onClick={handleDownload}
            >
              Download Data
            </button>
            <button
              id='download-btn-xls'
              data-testid='list'
              className='download-btn'
              onClick={generateCSV}
            >
              Download Data CSV
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CycloneData;
