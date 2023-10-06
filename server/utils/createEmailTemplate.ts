export const createHtml = (name: string, email: string, message: string): string => `
    <table style="background: #1A1A1A; border-radius: 0.5rem; width: 100%;">
      <tbody><tr>
        <td style="box-sizing: border-box; padding: 2rem;">
          <table>
            <tbody>
            <tr>
              <td>
                <h1 style="margin-bottom: 2rem; font-size: 2rem; line-height: 2rem; color: #F7F0F5; text-align: center">
                    Resume email
                </h1>
                <p style="
                    margin-bottom: 2rem;
                    color: #F7F0F5;
                    font-size: 1.25rem;
                    line-height: 1.325rem;"
                ><strong>Name: </strong>${name}</p>
                <p style="
                    margin-bottom: 2rem;
                    color: #F7F0F5; 
                    font-size: 1.25rem;
                    line-height: 1.325rem;"
                ><strong>Message:</strong><br/>${message}</p>
                <table style="
                    background-color: #42B883;
                    border: solid 1px #42B883;
                    border-radius: 5px;
                    cursor: pointer;
                    display: inline-block;
                    margin: 0;
                    padding: 12px 25px;
                    ">
                  <tbody>
                    <tr>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td> <span style="
                                color: #F7F0F5; 
                                text-decoration: none;
                                text-transform: capitalize;
                                font-size: 1.25rem;
                                line-height: 1.325rem;"
                              >${email}</span> </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
    </tbody></table>
`;
