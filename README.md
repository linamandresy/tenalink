# 🌐 TenaLink — Trustworthy Work References on the Blockchain

TenaLink is a decentralized system for issuing and validating professional **references**, **certificates**, and **recommendations**, especially designed to help **immigrants and newcomers** prove their foreign work experience **without relying on banks or centralized authorities**.

It uses the **Stellar blockchain** to anchor trust and link people through **verified connections**. Our unique graph-based model allows endorsements to be trusted based on relationship paths.

---

## 🎥 Demo Video

📽️ [Watch the Demo](https://your-demo-video-link.com)

---

## 📸 Screenshots

| Login View | Node Graph | Certificate Viewer |
|------------|------------|--------------------|
| ![Login](./screenshots/login.png) | ![Graph](./screenshots/graph.png) | ![Cert](./screenshots/certificate.png) |

---

## 🚀 Features

- Issue certificates and reference letters with **blockchain-verifiable authenticity**
- Trust-based graph model: nodes (people) are verified by other trusted nodes
- Each certificate is linked to a Stellar transaction for **immutable, timestamped proof**
- No banks, no fiat — trust and proof without the need for traditional financial systems
- Built with **Golang**, **React**, **Stellar SDK**, and **Docker**

---

## 🔗 How Blockchain is Used

We use the **Stellar testnet** to:

1. **Create a transaction** that includes certificate metadata (hash, date, signer ID)
2. Store the hash of this metadata in the transaction memo or a data entry
3. Return the transaction hash to the frontend to link the reference forever
4. Let third parties verify that:
   - The reference was issued
   - When it was issued
   - Who issued it (via public key and graph trust)

🛠️ Tools:
- `Stellar SDK (Go)`
- `Horizon API`
- `Memo fields` for metadata hash anchoring

---

## 🎙️ Technical Overview Video (Structure + Full Demo)

📽️ [Watch Technical Overview](https://your-tech-video-link.com)

This video includes:
- How the project is structured (folders, code)
- How Docker deployment is handled
- How the Stellar blockchain is integrated
- Live demo of certificate issuance and verification
- How the trust graph works
- How we fulfill the hackathon requirement on blockchain interaction

---

## 📁 Project Structure

```text
tenalink/
├── backend/             # Golang API + Stellar logic
│   ├── main.go
│   ├── stellar/
│   └── Dockerfile
├── frontend/            # React UI for graph and certs
│   ├── src/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🐳 Deployment

We deploy the app using **Docker on Render**.

**Live Demo URL**: [https://tenalink.onrender.com](https://tenalink.onrender.com) (replace with your actual Render URL)

---

## 📦 Stack

- **Backend**: Golang + Stellar SDK
- **Frontend**: React (with Tailwind CSS)
- **Blockchain**: Stellar Testnet (can be adapted to mainnet)
- **Hosting**: Render.com
- **Data**: IPFS (optional) or Stellar memo fields

---

## 🌍 Problem Solved

TenaLink addresses the problem of **“lack of Canadian experience”** or **unrecognized foreign references** faced by newcomers. Our decentralized, blockchain-backed model:
- Validates work history internationally
- Doesn’t rely on banks or national institutions
- Gives control to individuals and communities to **vouch for each other**

---

## ✨ What's Next?

- 🌐 Multi-language support (French, Malagasy, etc.)
- 🏛️ Integration with universities or institutions
- 🔏 End-to-end encryption of document metadata
- 🪪 Self-sovereign identity integration

---

## 🛡️ License

MIT License — open to contribution!

---

> Made with ❤️ for EasyA Consensus Hackathon - Toronto by Lina 