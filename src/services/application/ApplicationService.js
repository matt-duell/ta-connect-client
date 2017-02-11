

class ApplicationService{

  /*
    pageInfo will be an object which will help control the paging
    so we can retrieve only a subset of the positions.

    Two Ideas I had are below. The first one relys on the server
    calculating and informing the user what the next 'end index' 
    or 'start index' (depending on paging direction) with every
    response.

    The second approach does not rely on any of that, it's a simple
    page number request. I suspect the second one is easier.


    We can do filtering on either side (webApp or rest service) with
    either approach.

    
    reqPageInfo = {
      year:'',
      semester:'',
      startIndex:'',
      endIndex:''
    }

    reqPageInfo = {
      year:'',
      semester:'',
      pageNumber:''
      numRecords:''
    }


    filters could be used to request the server filter by specific
    parameters, so as to reduce the overall payload coming
    over the wire.

    Many of these could also be done client side. Perhaps a mix of both.

    e.g.
    filter by course year.. 100's.. 300's... etc
    filter by course name.. to get 'CSC321 Introduction to Machine Learning and Neural Networks'
      one could type in 'csc321'.. or 'Machine learning'.. 


    filters = {
      courseLevel : '300',
      partialCourseName : 'machine learning'
    }

  */
  getJobPositions(reqPageInfo,filters){
    //return dummy application list for now
    var openPositions = [
      {
        jobID:'csc148_fall_2017',
        courseName:'CSC148',
        courseLevel:'100',
        semester:'fall',
        year:'2017',
        shortDescription:'Some short description',
        longDescription:'A longer description of the course and what is entailed',
        requiredSkills:'Python, If Statements, Loops!, More Loops!',
        numberOfPositions:'300',
        classTimes:['Monday 08:00-10:00','Monday 17:00-20:00'],
        tutorialTimes:['Monday 11:00','Monday 21:00'],
      },
      {
        jobID:'csc165_fall_2017',
        courseName:'CSC165',
        courseLevel:'100',
        semester:'fall',
        year:'2017',
        shortDescription:'Some short description',
        longDescription:'A longer description of the course and what is entailed',
        requiredSkills:'Proofs, Recursion Proofs!, Contradictary Proofs! Proofs? Proofs!',
        numberOfPositions:'300',
        classTimes:['Tuesday 08:00-10:00','Tuesday 17:00-20:00'],
        tutorialTimes:['Tuesday 11:00','Tuesday 21:00'],
      }
    ];
    //Can use something like this to give an idea of how many records 
    // are present total, so we know if we should/shouldn't render a next/prev link.
    var respPageInfo = {
      totalNumPages:'1',
      totalNumRecords:'2'
    };

    return Promise.resolve({
      openPositions : openPositions,
      respPageInfo : respPageInfo
    });
  }

  submitApplication(positions,userInfo){

    return Promise.resolve({

    });
  }

}

export default ApplicationService;