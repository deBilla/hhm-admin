export async function getMedicalHelpers() {
  const data = await fetch(
    "http://ec2-3-86-39-26.compute-1.amazonaws.com:3001/v1/helper"
  );
  const json = await data.json();
  return json.payload;
}

export async function getMedicalHelperById(id: string) {
  const data = await fetch(
    `http://ec2-3-86-39-26.compute-1.amazonaws.com:3001/v1/helper/${id}`
  );
  const json = await data.json();
  return json.payload;
}

export async function deleteMedicalHelperById(id: string) {
  const data = await fetch(
    `http://ec2-3-86-39-26.compute-1.amazonaws.com:3001/v1/helper/${id}`,
{
    method: "DELETE",}
    
  );
  const json = await data.json();
  return json.payload;
}

export async function postMedicalHelper(medicalHelper: any) {
  const data = await fetch(
    "http://ec2-3-86-39-26.compute-1.amazonaws.com:3001/v1/helper",
    {
      method: "POST",
      body: JSON.stringify(medicalHelper),
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  return data.status;
}

export async function putMedicalHelper(id: string, medicalHelper: any) {
  const data = await fetch(
    "http://ec2-3-86-39-26.compute-1.amazonaws.com:3001/v1/helper",
    {
      method: "PUT",
      body: JSON.stringify({...medicalHelper, uuid: id}),
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  return data.status;
}
