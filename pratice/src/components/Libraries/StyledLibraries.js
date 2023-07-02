import styled from "styled-components";

export const StyledLibraries = styled.div`
  margin: 0 auto;
  margin-top: 100px;

  .card {
    display: flex;
    gap: 14px;
    padding: 20px 20px 24px;
    width: 300px;
    background: orange;
    border-radius: 10px;
  }

  h2,
  h3 {
    font-weight: 5000;
  }

  .card h2 {
    margin: 0 0 8px;
    font-size: 14px;
    color: rgb(67 67 100 /50%);
  }

  .card h3 abbr {
    margin-right: 4px;
    color: rgb(67 67 100 /25%);
  }
`;
