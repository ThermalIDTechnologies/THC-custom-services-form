import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 500;
    font-style: italic;
  }
`

const Ol = styled.ol`
  list-style: none;
  list-style-position: inside;
  counter-reset: my-awesome-counter 0;
  display: grid;
  grid-template-columns: min-content 1fr;
  /* text-align: center; */
  /* margin-left: 0; */

  li {
    font-size: 1rem;
    font-weight: bold;
    counter-increment: my-awesome-counter;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;

    small {
      font-weight: normal;
    }
  }

  li::before {
    content: counter(my-awesome-counter) " ";
    color: #497638;
    font-weight: bold;
    font-size: 2rem;
    height: 2rem;
  }
`

const CustomOl = () => {
  return (
    <Container>
      <h2>What we do?</h2>
      <Ol>
        <li>
          <span>
            Custom Labels & Packaging <br />{" "}
            <small>From 1-50 all the way to 250,000,000+ labels!</small>
          </span>
        </li>
        <li>Logo & Brand Design Services</li>
        <li>
          <span>
            Printer Solutions <br /> <small>Variable, thermal & Color</small>
          </span>
        </li>
        <li>Printer Supplies, Support & Maintenance</li>
        <li>
          <span>
            RFID Printer Solutions <br />{" "}
            <small>We can show you how to print on metric tags!</small>
          </span>
        </li>
        <li>RFID Supplies</li>
        <li>
          <span>
            POS Hardware <br /> <small>Scanners & Thermal Printers</small>
          </span>
        </li>
        <li>
          <span>
            Equipment <br />{" "}
            <small>
              Label Applicators, Filling Automation Lines, Oil Fillers & More!
            </small>
          </span>
        </li>
      </Ol>
    </Container>
  )
}

export default CustomOl
